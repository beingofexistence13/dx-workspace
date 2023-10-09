;;; seq-tests.el --- Tests for seq.el  -*- lexical-binding:t -*-

;; Copyright (C) 2014-2023 Free Software Foundation, Inc.

;; Author: Nicolas Petton <nicolas@petton.fr>
;; Maintainer: emacs-devel@gnu.org

;; This file is part of GNU Emacs.

;; GNU Emacs is free software: you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation, either version 3 of the License, or
;; (at your option) any later version.

;; GNU Emacs is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with GNU Emacs.  If not, see <https://www.gnu.org/licenses/>.

;;; Commentary:

;; Tests for sequences.el

;;; Code:

(require 'ert)
(require 'seq)

(eval-when-compile
  (require 'cl-lib))

(defmacro with-test-sequences (spec &rest body)
  "Successively bind VAR to a list, vector, and string built from SEQ.
Evaluate BODY for each created sequence.

\(fn (var seq) body)"
  (declare (indent 1) (debug ((symbolp form) body)))
  (let ((initial-seq (make-symbol "initial-seq")))
    `(let ((,initial-seq ,(cadr spec)))
       ,@(mapcar (lambda (s)
                   `(let ((,(car spec) (apply (function ,s) ,initial-seq)))
                      ,@body))
                 '(list vector string)))))

(defun same-contents-p (seq1 seq2)
  "Return t if SEQ1 and SEQ2 have the same contents, nil otherwise."
  (equal (append seq1 '()) (append seq2 '())))

(defun test-sequences-evenp (integer)
  "Return t if INTEGER is even."
  (eq (logand integer 1) 0))

(defun test-sequences-oddp (integer)
  "Return t if INTEGER is odd."
  (not (test-sequences-evenp integer)))

(ert-deftest test-setf-seq-elt ()
  (with-test-sequences (seq '(1 2 3))
    (setf (seq-elt seq 1) 4)
    (should (= 4 (seq-elt seq 1)))))

(ert-deftest test-seq-drop ()
  (with-test-sequences (seq '(1 2 3 4))
    (should (equal (seq-drop seq 0) seq))
    (should (equal (seq-drop seq 1) (seq-subseq seq 1)))
    (should (equal (seq-drop seq 2) (seq-subseq seq 2)))
    (should (seq-empty-p (seq-drop seq 4)))
    (should (seq-empty-p (seq-drop seq 10))))
  (with-test-sequences (seq '())
    (should (seq-empty-p (seq-drop seq 0)))
    (should (seq-empty-p (seq-drop seq 1)))))

(ert-deftest test-seq-take ()
  (with-test-sequences (seq '(2 3 4 5))
    (should (seq-empty-p (seq-take seq 0)))
    (should (= (seq-length (seq-take seq 1)) 1))
    (should (= (seq-elt (seq-take seq 1) 0) 2))
    (should (same-contents-p (seq-take seq 3) '(2 3 4)))
    (should (equal (seq-take seq 10) seq))))

(ert-deftest test-seq-drop-while ()
  (with-test-sequences (seq '(1 3 2 4))
    (should (equal (seq-drop-while #'test-sequences-oddp seq)
                   (seq-drop seq 2)))
    (should (equal (seq-drop-while #'test-sequences-evenp seq)
                   seq))
    (should (seq-empty-p (seq-drop-while #'numberp seq))))
  (with-test-sequences (seq '())
    (should (seq-empty-p (seq-drop-while #'test-sequences-oddp seq)))))

(ert-deftest test-seq-take-while ()
  (with-test-sequences (seq '(1 3 2 4))
    (should (equal (seq-take-while #'test-sequences-oddp seq)
                   (seq-take seq 2)))
    (should (seq-empty-p (seq-take-while #'test-sequences-evenp seq)))
    (should (equal (seq-take-while #'numberp seq) seq)))
  (with-test-sequences (seq '())
    (should (seq-empty-p (seq-take-while #'test-sequences-oddp seq)))))

(ert-deftest test-seq-map-indexed ()
  (should (equal (seq-map-indexed (lambda (elt i)
                                    (list elt i))
                                  nil)
                 nil))
  (should (equal (seq-map-indexed (lambda (elt i)
                                    (list elt i))
                                  '(a b c d))
                 '((a 0) (b 1) (c 2) (d 3)))))

(ert-deftest test-seq-do-indexed ()
  (let (result)
    (seq-do-indexed (lambda (elt i) (push (list elt i) result)) ())
    (should-not result))
  (with-test-sequences (seq '(4 5 6))
    (let (result)
      (seq-do-indexed (lambda (elt i) (push (list elt i) result)) seq)
      (should (equal (seq-elt result 0) '(6 2)))
      (should (equal (seq-elt result 1) '(5 1)))
      (should (equal (seq-elt result 2) '(4 0))))))

(ert-deftest test-seq-filter ()
  (with-test-sequences (seq '(6 7 8 9 10))
    (should (equal (seq-filter #'test-sequences-evenp seq) '(6 8 10)))
    (should (equal (seq-filter #'test-sequences-oddp seq) '(7 9)))
    (should (equal (seq-filter (lambda (_) nil) seq) '())))
  (with-test-sequences (seq '())
    (should (equal (seq-filter #'test-sequences-evenp seq) '()))))

(ert-deftest test-seq-remove ()
  (with-test-sequences (seq '(6 7 8 9 10))
    (should (equal (seq-remove #'test-sequences-evenp seq) '(7 9)))
    (should (equal (seq-remove #'test-sequences-oddp seq) '(6 8 10)))
    (should (same-contents-p (seq-remove (lambda (_) nil) seq) seq)))
  (with-test-sequences (seq '())
    (should (equal (seq-remove #'test-sequences-evenp seq) '()))))

(ert-deftest test-seq-remove-at-position ()
  (with-test-sequences (seq '(1 2 3 4))
    (should (same-contents-p (seq-remove-at-position seq 2) '(1 2 4)))
    (should (same-contents-p (seq-remove-at-position seq 0) '(2 3 4)))
    (should (same-contents-p (seq-remove-at-position seq 3) '(1 2 3)))
    (should (eq (type-of (seq-remove-at-position seq 2))
                (type-of seq)))))

(ert-deftest test-seq-count ()
  (with-test-sequences (seq '(6 7 8 9 10))
    (should (equal (seq-count #'test-sequences-evenp seq) 3))
    (should (equal (seq-count #'test-sequences-oddp seq) 2))
    (should (equal (seq-count (lambda (_) nil) seq) 0)))
  (with-test-sequences (seq '())
    (should (equal (seq-count #'test-sequences-evenp seq) 0))))

(ert-deftest test-seq-reduce ()
  (with-test-sequences (seq '(1 2 3 4))
    (should (= (seq-reduce #'+ seq 0) 10))
    (should (= (seq-reduce #'+ seq 5) 15)))
  (with-test-sequences (seq '())
    (should (eq (seq-reduce #'+ seq 0) 0))
    (should (eq (seq-reduce #'+ seq 7) 7))))

(ert-deftest test-seq-some ()
  (with-test-sequences (seq '(4 3 2 1))
    (should (seq-some #'test-sequences-evenp seq))
    (should (seq-some #'test-sequences-oddp seq))
    (should-not (seq-some (lambda (elt) (> elt 10)) seq)))
  (with-test-sequences (seq '())
    (should-not (seq-some #'test-sequences-oddp seq)))
  (should (seq-some #'null '(1 nil 2))))

(ert-deftest test-seq-find ()
  (with-test-sequences (seq '(4 3 2 1))
    (should (= 4 (seq-find #'test-sequences-evenp seq)))
    (should (= 3 (seq-find #'test-sequences-oddp seq)))
    (should-not (seq-find (lambda (elt) (> elt 10)) seq)))
  (should-not (seq-find #'null '(1 nil 2)))
  (should-not (seq-find #'null '(1 nil 2) t))
  (should-not (seq-find #'null '(1 2 3)))
  (should (seq-find #'null '(1 2 3) 'sentinel)))

(ert-deftest test-seq-contains ()
  (with-suppressed-warnings ((obsolete seq-contains))
    (with-test-sequences (seq '(3 4 5 6))
      (should (seq-contains seq 3))
      (should-not (seq-contains seq 7)))
    (with-test-sequences (seq '())
      (should-not (seq-contains seq 3))
      (should-not (seq-contains seq nil)))))

(ert-deftest test-seq-contains-should-return-the-elt ()
  (with-suppressed-warnings ((obsolete seq-contains))
    (with-test-sequences (seq '(3 4 5 6))
      (should (= 5 (seq-contains seq 5))))))

(ert-deftest test-seq-contains-p ()
  (with-test-sequences (seq '(3 4 5 6))
    (should (eq (seq-contains-p seq 3) t))
    (should-not (seq-contains-p seq 7)))
  (with-test-sequences (seq '())
    (should-not (seq-contains-p seq 3))
    (should-not (seq-contains-p seq nil))))

(ert-deftest test-seq-contains-p-with-nil ()
  (should (seq-contains-p  [nil] nil))
  (should (seq-contains-p '(nil) nil)))

(ert-deftest test-seq-every-p ()
  (with-test-sequences (seq '(43 54 22 1))
    (should (seq-every-p (lambda (_) t) seq))
    (should-not (seq-every-p #'test-sequences-oddp seq))
    (should-not (seq-every-p #'test-sequences-evenp seq)))
  (with-test-sequences (seq '(42 54 22 2))
    (should (seq-every-p #'test-sequences-evenp seq))
    (should-not (seq-every-p #'test-sequences-oddp seq)))
  (with-test-sequences (seq '())
    (should (seq-every-p #'identity seq))
    (should (seq-every-p #'test-sequences-evenp seq))))

(ert-deftest test-seq-set-equal-p ()
  (with-test-sequences (seq1 '(1 2 3))
    (should (seq-set-equal-p seq1 seq1))
    (should (seq-set-equal-p seq1 seq1 #'eq))

    (with-test-sequences (seq2 '(3 2 1))
      (should (seq-set-equal-p seq1 seq2))
      (should (seq-set-equal-p seq2 seq1))
      (should (seq-set-equal-p seq1 seq2 #'eq))
      (should (seq-set-equal-p seq2 seq1 #'eq)))

    (with-test-sequences (seq2 '(3 1))
      (should-not (seq-set-equal-p seq1 seq2))
      (should-not (seq-set-equal-p seq2 seq1))))

  (should (seq-set-equal-p '("a" "b" "c")
                           '("c" "b" "a")))
  (should-not (seq-set-equal-p '("a" "b" "c")
                               '("c" "b" "a") #'eq))
  (should-not (seq-set-equal-p '(("a" 1) ("b" 1) ("c" 1))
                               '(("c" 2) ("b" 2) ("a" 2))))
  (should (seq-set-equal-p '(("a" 1) ("b" 1) ("c" 1))
                           '(("c" 2) ("b" 2) ("a" 2))
                           (lambda (i1 i2) (equal (car i1) (car i2))))))

(ert-deftest test-seq-empty-p ()
  (with-test-sequences (seq '(0))
    (should-not (seq-empty-p seq)))
  (with-test-sequences (seq '(0 1 2))
    (should-not (seq-empty-p seq)))
  (with-test-sequences (seq '())
    (should (seq-empty-p seq))))

(ert-deftest test-seq-sort ()
  (should (equal (seq-sort #'< "cbaf") "abcf"))
  (should (equal (seq-sort #'< '(2 1 9 4)) '(1 2 4 9)))
  (should (equal (seq-sort #'< [2 1 9 4]) [1 2 4 9]))
  (should (equal (seq-sort #'< "") "")))

(ert-deftest test-seq-uniq ()
  (with-test-sequences (seq '(2 4 6 8 6 4 3))
    (should (equal (seq-uniq seq) '(2 4 6 8 3))))
  (with-test-sequences (seq '(3 3 3 3 3))
    (should (equal (seq-uniq seq) '(3))))
  (with-test-sequences (seq '())
    (should (equal (seq-uniq seq) '()))))

(defun seq-tests--list-subseq-ref (list start &optional end)
  "Reference implementation of `seq-subseq' for lists."
  (let ((len (length list)))
    (when (< start 0)
      (setq start (+ start len)))
    (unless end
      (setq end len))
    (when (< end 0)
      (setq end (+ end len)))
    (if (<= 0 start end len)
        (take (- end start) (nthcdr start list))
      (error "bad args"))))

(ert-deftest test-seq-subseq ()
  (with-test-sequences (seq '(2 3 4 5))
    (should (equal (seq-subseq seq 0 4) seq))
    (should (same-contents-p (seq-subseq seq 2 4) '(4 5)))
    (should (same-contents-p (seq-subseq seq 1 3) '(3 4)))
    (should (same-contents-p (seq-subseq seq 1 -1) '(3 4))))
  (should (vectorp (seq-subseq [2 3 4 5] 2)))
  (should (stringp (seq-subseq "foo" 2 3)))
  (should (listp (seq-subseq '(2 3 4 4) 2 3)))
  (should-error (seq-subseq '(1 2 3) 4))
  (should-not   (seq-subseq '(1 2 3) 3))
  (should       (seq-subseq '(1 2 3) -3))
  (should-error (seq-subseq '(1 2 3) 1 4))
  (should       (seq-subseq '(1 2 3) 1 3))
  (should-error (seq-subseq '() -1))
  (should-error (seq-subseq [] -1))
  (should-error (seq-subseq "" -1))
  (should-not (seq-subseq '() 0))
  (should-error (seq-subseq '() 0 -1))

  (dolist (list '(() (a b c d)))
    (ert-info ((prin1-to-string list) :prefix "list: ")
      (let ((len (length list)))
        (dolist (start (number-sequence (- -2 len) (+ 2 len)))
          (ert-info ((prin1-to-string start) :prefix "start: ")
            (dolist (end (cons nil (number-sequence (- -2 len) (+ 2 len))))
              (ert-info ((prin1-to-string end) :prefix "end: ")
                (condition-case res
                    (seq-tests--list-subseq-ref list start end)
                  (error
                   (should-error (seq-subseq list start end)))
                  (:success
                   (should (equal (seq-subseq list start end) res))))))))))))

(ert-deftest test-seq-concatenate ()
  (with-test-sequences (seq '(2 4 6))
    (should (equal (seq-concatenate 'string seq [8]) (string 2 4 6 8)))
    (should (equal (seq-concatenate 'list seq '(8 10)) '(2 4 6 8 10)))
    (should (equal (seq-concatenate 'vector seq '(8 10)) [2 4 6 8 10]))
    (should (equal (seq-concatenate 'vector nil '(8 10)) [8 10]))
    (should (equal (seq-concatenate 'vector seq nil) [2 4 6]))))

(ert-deftest test-seq-mapcat ()
  (should (equal (seq-mapcat #'seq-reverse '((3 2 1) (6 5 4)))
                 '(1 2 3 4 5 6)))
  (should (equal (seq-mapcat #'seq-reverse '[(3 2 1) (6 5 4)])
                 '(1 2 3 4 5 6)))
  (should (equal (seq-mapcat #'seq-reverse '((3 2 1) (6 5 4)) 'vector)
                 '[1 2 3 4 5 6])))

(ert-deftest test-seq-partition ()
  (should (same-contents-p (seq-partition '(0 1 2 3 4 5 6 7) 3)
                           '((0 1 2) (3 4 5) (6 7))))
  (should (same-contents-p (seq-partition '[0 1 2 3 4 5 6 7] 3)
                           '([0 1 2] [3 4 5] [6 7])))
  (should (same-contents-p (seq-partition "Hello world" 2)
                           '("He" "ll" "o " "wo" "rl" "d")))
  (should (equal (seq-partition '() 2) '()))
  (should (equal (seq-partition '(1 2 3) -1) '())))

(ert-deftest test-seq-group-by ()
  (with-test-sequences (seq '(1 2 3 4))
   (should (equal (seq-group-by #'test-sequences-oddp seq)
                  '((t 1 3) (nil 2 4)))))
  (should (equal (seq-group-by #'car '((a 1) (b 3) (c 4) (a 2)))
                 '((b (b 3)) (c (c 4)) (a (a 1) (a 2))))))

(ert-deftest test-seq-reverse ()
  (with-test-sequences (seq '(1 2 3 4))
    (should (same-contents-p (seq-reverse seq) '(4 3 2 1)))
    (should (equal (type-of (seq-reverse seq))
                   (type-of seq)))))

(ert-deftest test-seq-into ()
  (let* ((vector [1 2 3])
         (list (seq-into vector 'list)))
    (should (same-contents-p vector list))
    (should (listp list)))
  (let* ((list '(hello world))
         (vector (seq-into list 'vector)))
    (should (same-contents-p vector list))
    (should (vectorp vector)))
  (let* ((string "hello")
         (list (seq-into string 'list)))
    (should (same-contents-p string list))
    (should (stringp string)))
  (let* ((string "hello")
         (vector (seq-into string 'vector)))
    (should (same-contents-p string vector))
    (should (stringp string)))
  (let* ((list nil)
         (vector (seq-into list 'vector)))
    (should (same-contents-p list vector))
    (should (vectorp vector))))

(ert-deftest test-seq-union ()
  (let ((v1 '(1 2 3))
        (v2 '(3 5)))
   (should (same-contents-p (seq-union v1 v2)
                            '(1 2 3 5))))

  (let ((v1 '(1 2 3 4 5 6))
        (v2 '(4 5 6 7 8 9)))
   (should (same-contents-p (seq-union v1 v2)
                            '(1 2 3 4 5 6 7 8 9))))

  (let ((v1 [1 2 3 4 5])
        (v2 [4 5 6 "a"]))
   (should (same-contents-p (seq-union v1 v2)
                            '(1 2 3 4 5 6 "a"))))

  (let ((v1 '("a" "b" "c"))
        (v2 '("f" "c" "e" "a")))
   (should (same-contents-p (seq-union v1 v2)
                            '("a" "b" "c" "f" "e"))))

  (let ((v1 '("a"))
        (v2 '("a"))
        (testfn #'eq))
   (should (same-contents-p (seq-union v1 v2 testfn)
                            '("a" "a")))))

(ert-deftest test-seq-intersection ()
  (let ((v1 [2 3 4 5])
        (v2 [1 3 5 6 7]))
    (should (same-contents-p (seq-intersection v1 v2)
                             '(3 5))))
  (let ((l1 '(2 3 4 5))
        (l2 '(1 3 5 6 7)))
    (should (same-contents-p (seq-intersection l1 l2)
                             '(3 5))))
  (let ((v1 [2 4 6])
        (v2 [1 3 5]))
    (should (seq-empty-p (seq-intersection v1 v2)))))

(ert-deftest test-seq-difference ()
  (let ((v1 [2 3 4 5])
        (v2 [1 3 5 6 7]))
    (should (same-contents-p (seq-difference v1 v2)
                             '(2 4))))
  (let ((l1 '(2 3 4 5))
        (l2 '(1 3 5 6 7)))
    (should (same-contents-p (seq-difference l1 l2)
                             '(2 4))))
  (let ((v1 [2 4 6])
        (v2 [2 4 6]))
    (should (seq-empty-p (seq-difference v1 v2)))))

(ert-deftest test-seq-let ()
  (with-test-sequences (seq '(1 2 3 4))
    (seq-let (a b c d e) seq
      (should (= a 1))
      (should (= b 2))
      (should (= c 3))
      (should (= d 4))
      (should (null e)))
    (seq-let (a b &rest others) seq
      (should (= a 1))
      (should (= b 2))
      (should (same-contents-p others (seq-drop seq 2)))))
  (let ((seq '(1 (2 (3 (4))))))
    (seq-let (_ (_ (_ (a)))) seq
      (should (= a 4))))
  (let ((seq nil))
    (seq-let (a b c) seq
      (should (null a))
      (should (null b))
      (should (null c)))))

(ert-deftest test-seq-setq ()
  (with-test-sequences (seq '(1 2 3 4))
    (let (a b c d e)
      (seq-setq (a b c d e) seq)
      (should (= a 1))
      (should (= b 2))
      (should (= c 3))
      (should (= d 4))
      (should (null e)))
    (let (a b others)
      (seq-setq (a b &rest others) seq)
      (should (= a 1))
      (should (= b 2))
      (should (same-contents-p others (seq-drop seq 2)))))
  (let ((a)
        (seq '(1 (2 (3 (4))))))
    (seq-setq (_ (_ (_ (a)))) seq)
    (should (= a 4)))
  (let ((seq nil) a b c)
    (seq-setq (a b c) seq)
    (should (null a))
    (should (null b))
    (should (null c))))

(ert-deftest test-seq-min-max ()
  (with-test-sequences (seq '(4 5 3 2 0 4))
    (should (= (seq-min seq) 0))
    (should (= (seq-max seq) 5))))

(ert-deftest test-seq-into-sequence ()
  (with-test-sequences (seq '(1 2 3))
    (should (eq seq (seq-into-sequence seq)))
    (should-error (seq-into-sequence 2))))

(ert-deftest test-seq-position ()
  (with-test-sequences (seq '(2 4 6))
    (should (null (seq-position seq 1)))
    (should (= (seq-position seq 4) 1)))
  (let ((seq '(a b c)))
    (should (null (seq-position seq 'd #'eq)))
    (should (= (seq-position seq 'a #'eq) 0))
    (should (null (seq-position seq (make-symbol "a") #'eq)))))

(ert-deftest test-seq-positions ()
  (with-test-sequences (seq '(1 2 3 1 4))
    (should (equal '(0 3) (seq-positions seq 1)))
    (should (seq-empty-p (seq-positions seq 9))))
  (with-test-sequences (seq '(11 5 7 12 9 15))
    (should (equal '(0 3 5) (seq-positions seq 10 #'>=)))))

(ert-deftest test-seq-sort-by ()
  (let ((seq ["x" "xx" "xxx"]))
    (should (equal (seq-sort-by #'seq-length #'> seq)
                   ["xxx" "xx" "x"]))))

(ert-deftest test-seq-random-elt-take-all ()
  (let ((seq '(a b c d e))
        elts)
    (dotimes (_ 1000)
      (let ((random-elt (seq-random-elt seq)))
        (cl-pushnew random-elt elts)))
    (should (= 5 (length elts)))))

(ert-deftest test-seq-random-elt-signal-on-empty ()
  (should-error (seq-random-elt nil))
  (should-error (seq-random-elt []))
  (should-error (seq-random-elt "")))

(ert-deftest test-seq-mapn-circular-lists ()
  (let ((l1 '#1=(1 . #1#)))
    (should (equal (seq-mapn #'+ '(3 4 5 7) l1)
                   '(4 5 6 8)))))

(ert-deftest test-seq-into-and-identity ()
  (let ((lst '(1 2 3))
        (vec [1 2 3])
        (str "foo bar"))
    (should (eq (seq-into lst 'list) lst))
    (should (eq (seq-into vec 'vector) vec))
    (should (eq (seq-into str 'string) str))))

(ert-deftest test-seq-first ()
  (let ((lst '(1 2 3))
        (vec [1 2 3]))
    (should (eq (seq-first lst) 1))
    (should (eq (seq-first vec) 1))))

(ert-deftest test-seq-rest ()
  (let ((lst '(1 2 3))
        (vec [1 2 3]))
    (should (equal (seq-rest lst) '(2 3)))
    (should (equal (seq-rest vec) [2 3]))))

;; Regression tests for bug#34852
(progn
  (ert-deftest test-seq-intersection-with-nil ()
    (should (equal (seq-intersection '(1 2 nil) '(1 nil)) '(1 nil))))

  (ert-deftest test-seq-set-equal-p-with-nil ()
    (should (seq-set-equal-p '("a" "b" nil)
                             '(nil "b" "a"))))

  (ert-deftest test-difference-with-nil ()
    (should (equal (seq-difference '(1 nil) '(2 nil))
                   '(1)))))

(ert-deftest test-seq-split ()
  (let ((seq [0 1 2 3 4 5 6 7 8 9 10]))
    (should (equal seq (car (seq-split seq 20))))
    (should (equal seq (car (seq-split seq 11))))
    (should (equal (seq-split seq 10)
                   '([0 1 2 3 4 5 6 7 8 9] [10])))
    (should (equal (seq-split seq 5)
                   '([0 1 2 3 4] [5 6 7 8 9] [10])))
    (should (equal (seq-split seq 1)
                   '([0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10])))
    (should-error (seq-split seq 0))
    (should-error (seq-split seq -10)))
  (let ((seq '(0 1 2 3 4 5 6 7 8 9)))
    (should (equal (seq-split seq 5)
                   '((0 1 2 3 4) (5 6 7 8 9)))))
  (let ((seq "0123456789"))
    (should (equal (seq-split seq 2)
                   '("01" "23" "45" "67" "89")))
    (should (equal (seq-split seq 3)
                   '("012" "345" "678" "9")))))

(ert-deftest test-seq-uniq-list ()
  (let ((list '(1 2 3)))
    (should (equal (seq-uniq (append list list)) '(1 2 3))))
  (let ((list '(1 2 3 2 1)))
    (should (equal (seq-uniq list) '(1 2 3))))
  (let ((list (list (substring "1")
                    (substring "2")
                    (substring "3")
                    (substring "2")
                    (substring "1"))))
    (should (equal (seq-uniq list) '("1" "2" "3")))
    (should (equal (seq-uniq list #'eq) '("1" "2" "3" "2" "1"))))
  ;; Long lists have a different code path.
  (let ((list (seq-map-indexed (lambda (_ i) i)
			       (make-list 10000 nil))))
    (should (= (length list) 10000))
    (should (= (length (seq-uniq (append list list))) 10000))))

(ert-deftest test-seq-keep ()
  (should (equal (seq-keep #'cl-digit-char-p '(?6 ?a ?7))
                 '(6 7)))
  (should (equal (seq-keep #'cl-digit-char-p [?6 ?a ?7])
                 '(6 7))))

(provide 'seq-tests)
;;; seq-tests.el ends here