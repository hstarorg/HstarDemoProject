# 递归函数，求阶乘
def fact(n):
    if n==1:
        return 1
    return n * fact(n - 1)

print(fact(10))