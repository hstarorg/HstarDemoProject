# 标准if语句，line3中的int(age)是将字符串转换为int
age=input('你多少岁了：')
age=int(age)
if age>=18:
	print('你成年了！')
elif age>=6:
	print('超过6岁了，你上学了吗？')
else:
  	print('你还没成年！')

# 简化写法，当x为非零数值、非空字符串、非空List，则判断为True
x=1
if x:
	print('True')

# for ... in 循环
sum=0
list=[1,2,3,4,5,6,7]
for v in list:
	sum+=v
	print(v)
print('list元素之和为：%d' %(sum))

# 利用range生成整数序列，range(101)表示0到100的整数序列，101表示从0开始，小于101
ran=range(101)
print(ran)
print(len(ran)) # 101

# while循环
i=0
sum=0
while i<=100:
	sum+=ran[i]
	print('ran[%d]=%d' %(i,ran[i]))
	i=i+1
print('1+2+...+99+100=%d' %(sum))