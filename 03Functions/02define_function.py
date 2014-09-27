# 定义一般函数，无return的话，默认return None
def testFun(x):
	print('This is a function,the parameter is :%s' %(x))

result = testFun('Jay')
print(result)

# 定义空函数，在函数体重放置 pass 关键字即可（pass用作占位符，让代码先跑起来）
def emptyFun(x):
	pass
emptyFun('x')

# 参数检查，定义函数时检查参数类型
def testFun2(x):
	if not isinstance(x,(int,float)):
		raise TypeError('parameter must be int or float')
	print('Call function succeed!')
testFun2(1)
# 错误调用代码：testFun2('1')

# 函数多返回值
def testFun3(x):
	return x-1,x+1
x=5
a,b=testFun3(x)
print('x=%d,a=%d,b=%d' %(x,a,b))

# 函数参数默认值。在参数上赋初值，可以实现参数默认值
def testFun4(a,b=10,c=100):
	return a+b

result=testFun4(5)
print(result)
result=testFun4(5,5)
print(result)

# 设定c的值，b采用默认值
result=testFun4(5,c=0)
print(result)

# 定义默认参数要牢记一点：默认参数必须指向不变对象，如果不这么做，那么看以下代码：
def testFun5(list=[]):
	list.append('End')
	return list
l=testFun5()
print(l) # ['End']
l=testFun5()
print(l) # ['End', 'End']

# 原因分析：
# Python函数在定义的时候，默认参数list的值就被计算出来了，即[]，
# 因为默认参数list也是一个变量，它指向对象[]，每次调用该函数，
# 如果改变了list的内容，则下次调用时，默认参数的内容就变了，不再是函数定义时的[]了。

#修改上述代码，让它正常
def testFun5(list=None):
	if(list==None):
		list=[]
	list.append('End')
	return list
l=testFun5()
print(l) # ['End']
l=testFun5()
print(l) # ['End']

# 函数可变参数，在参数名前加*号，则表示可变参数
def testFun6(*numbers):
	sum=0
	for num in numbers:
		sum+=num
	return sum
print(testFun6(1,2,3,4,5)) # 15

# 如果已有一个list或者tuple，可将其作为可变参数传递
list=[1,2,3]
print(testFun6(list[0],list[1],list[2])) # 6
print(testFun6(*list)) # 6

# 关键字参数 (**other会将多余的参数组装为dict)
def testFun7(a,b,**other):
	print(a,b,other)

testFun7('a','b',c='c',d='d') # 必须采用这样的调用方式
dict={'c':'c','d':'d'}
testFun7('a','b',**dict)

# 参数组合，必选参数、默认参数、可选参数、关键字参数
# 请注意，参数定义的顺序必须是：必选参数、默认参数、可变参数和关键字参数。
def testFun8(a,b=10,*c,**d):
	print('a+b=%d' %(a+b))
	print(c)
	print(d)

testFun8(1,2,3,4,5,m=1,n=2)

print('--------------------------------------------------------------')
#对于任何函数，都可以用类似（比如testFun5、testFun7就不行，所以是类似）如下方式调用
tuple=(1,) # 也可以是[1]，但注意：不是是空list
dict={}
testFun(*tuple,**dict)
testFun2(*tuple,**dict)
testFun3(*tuple,**dict)
testFun4(*tuple,**dict)
testFun6(*tuple,**dict)
testFun8(*tuple,**dict)
