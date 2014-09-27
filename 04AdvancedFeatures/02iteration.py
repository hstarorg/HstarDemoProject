# list迭代
list=[1,2,3,4]
for l in list:
	print(l)

# tuple迭代
tuple=(1,2,3,4)
for t in tuple:
	print(t)

# 字符串迭代
str=u'abcde'
for c in str:
	print(c)

# set迭代
set=set([1,2,3,4])
for s in set:
	print(s)

# dict迭代
dict={'k2':2,'k1':1}
for k in dict:
	print(k)

# 迭代dict的key/value (在Python2.x中，items()应该为iteritems())
for k,v in dict.items():
	print('%s=%s' %(k,v))

# 迭代dict的value
for v in dict.values():
	print(v)

# 迭代时，使用下标
for i,l in enumerate(list):
	print('list[%d]=%s' %(i,l))

# 常见迭代
for a,b in [(1,2),(3,4),(5,6)]:
	print (a,b)