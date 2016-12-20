package main

import "os"
import "fmt"
import "strconv"
import "math"

var usage = func(msg string) {
	if msg != "" {
		fmt.Println(msg)
	}
	fmt.Println("USAGE: calc <command> [args] ...")
	fmt.Println("command: [plus, sqrt]")
}

func main() {
	args := os.Args
	fmt.Println(args)
	if args == nil || len(args) < 2 {
		usage("")
		return
	}
	switch args[1] {
	case "plus":
		if len(args) != 4 {
			fmt.Println("calc plus <integer1> <integer2>")
			return
		}
		n1, err1 := strconv.Atoi(args[2])
		n2, err2 := strconv.Atoi(args[3])

		if err1 != nil || err2 != nil {
			usage("")
			return
		}

		fmt.Println(n1 + n2)
		break
	case "sqrt":
		if len(args) != 3 {
			fmt.Println("calc sqrt <integer1>")
			return
		}
		n1, _ := strconv.Atoi(args[2])
		fmt.Println("Result:", math.Sqrt(float64(n1)))
		break
	default:
		usage(args[0])
	}
}
