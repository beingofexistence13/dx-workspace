" Vim filetype plugin file
" Language:         OpenSSH client configuration file
" Previous Maintainer:       Nikolai Weibull <now@bitwi.se>
" Latest Revision:  2008-07-09

if exists("b:did_ftplugin")
  finish
endif
let b:did_ftplugin = 1

let s:cpo_save = &cpo
set cpo&vim

setlocal comments=:# commentstring=#\ %s formatoptions-=t formatoptions+=croql
let b:undo_ftplugin = 'setlocal com< cms< fo<'

if has('unix') && executable('less')
  if !has('gui_running')
    command -buffer -nargs=1 Sman
          \ silent exe '!' . 'LESS= MANPAGER="less --pattern=''^\s+' . <q-args> . '$'' --hilite-search" man ' . 'ssh_config' |
          \ redraw!
  elseif has('terminal')
    command -buffer -nargs=1 Sman
          \ silent exe 'term ' . 'env LESS= MANPAGER="less --pattern=''' . escape('^\s+' . <q-args> . '$', '\') . ''' --hilite-search" man ' . 'ssh_config'
  endif
  if exists(':Sman') == 2
    setlocal iskeyword+=-
    setlocal keywordprg=:Sman
    let b:undo_ftplugin .= '| setlocal keywordprg< iskeyword< | sil! delc -buffer Sman'
  endif
endif

let &cpo = s:cpo_save
unlet s:cpo_save
