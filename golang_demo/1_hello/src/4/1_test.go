package test2

import "testing"

func Test1(t *testing.T) {
	n := Fn1()
	if n != 1 {
		t.Errorf("Fn1 error")
	}
}

func Test2(t *testing.T) {
	id, name := Fn2(1, "Jay")
	if id != 1 || name != "Jay2" {
		t.Errorf("Fn2 error")
	}
}
