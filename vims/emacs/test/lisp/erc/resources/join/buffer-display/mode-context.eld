;; -*- mode: lisp-data; -*-
((nick 1 "NICK tester"))
((user 1 "USER user 0 * :tester")
 (0.00 ":irc.foonet.org 001 tester :Welcome to the foonet IRC Network tester")
 (0.01 ":irc.foonet.org 002 tester :Your host is irc.foonet.org, running version ergo-v2.8.0")
 (0.00 ":irc.foonet.org 003 tester :This server was created Tue, 24 May 2022 05:28:42 UTC")
 (0.00 ":irc.foonet.org 004 tester irc.foonet.org ergo-v2.8.0 BERTZios CEIMRUabefhiklmnoqstuv Iabefhkloqv")
 (0.00 ":irc.foonet.org 005 tester AWAYLEN=390 BOT=B CASEMAPPING=ascii CHANLIMIT=#:100 CHANMODES=Ibe,k,fl,CEMRUimnstu CHANNELLEN=64 CHANTYPES=# ELIST=U EXCEPTS EXTBAN=,m FORWARD=f INVEX KICKLEN=390 :are supported by this server")
 (0.01 ":irc.foonet.org 005 tester MAXLIST=beI:60 MAXTARGETS=4 MODES MONITOR=100 NETWORK=foonet NICKLEN=32 PREFIX=(qaohv)~&@%+ STATUSMSG=~&@%+ TARGMAX=NAMES:1,LIST:1,KICK:,WHOIS:1,USERHOST:10,PRIVMSG:4,TAGMSG:4,NOTICE:4,MONITOR:100 TOPICLEN=390 UTF8MAPPING=rfc8265 UTF8ONLY WHOX :are supported by this server")
 (0.01 ":irc.foonet.org 005 tester draft/CHATHISTORY=100 :are supported by this server")
 (0.00 ":irc.foonet.org 251 tester :There are 0 users and 4 invisible on 1 server(s)")
 (0.00 ":irc.foonet.org 252 tester 0 :IRC Operators online")
 (0.00 ":irc.foonet.org 253 tester 0 :unregistered connections")
 (0.00 ":irc.foonet.org 254 tester 2 :channels formed")
 (0.00 ":irc.foonet.org 255 tester :I have 4 clients and 0 servers")
 (0.00 ":irc.foonet.org 265 tester 4 4 :Current local users 4, max 4")
 (0.00 ":irc.foonet.org 266 tester 4 4 :Current global users 4, max 4")
 (0.00 ":irc.foonet.org 422 tester :MOTD File is missing"))

((mode 6 "MODE tester +i")
 (0.00 ":irc.foonet.org 221 tester +i")
 (0.00 ":irc.foonet.org NOTICE tester :This server is in debug mode and is logging all user I/O. If you do not wish for everything you send to be readable by the server owner(s), please disconnect.")
 (0.02 ":irc.foonet.org 221 tester +i"))

((join-chan 10 "JOIN #chan")
 (0.03 ":tester!~u@w9rfqveugz722.irc JOIN #chan"))

((~mode-chan 10 "MODE #chan")
 (0.01 ":irc.foonet.org 353 tester = #chan :@tester")
 (0.00 ":irc.foonet.org 366 tester #chan :End of NAMES list")
 (0.01 ":irc.foonet.org 324 tester #chan +nt")
 (0.03 ":irc.foonet.org 329 tester #chan 1653370308"))

((~join-spam 10 "JOIN #spam")
 (0.03 ":irc.foonet.org 471 tester #spam :Cannot join channel (+l)"))

((~join-foo 10 "JOIN #foo")
 (0.03 ":irc.foonet.org 473 tester #foo :Cannot join channel (+i)"))
