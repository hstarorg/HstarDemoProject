# 切片操作
# 取list或者tuple的部分元素
# 以下操作对list和tuple均有效，同时对字符串也有效
list=[1,2,3,4,5,6,7,8,9,10]

# 取前三个元素（常规做法）
l=[list[0],list[1],list[2]]
# 取前N个元素
def getFistNElments(list,n):
	result=[]
	i=0
	while i<n:
		result.insert(len(result),list[i])
		i+=1
	return result

l=getFistNElments(list,5)
print(l)

# 要是从idx开始，取n个呢？扩展上面的函数
def getFistNElments(list,n,idx=0):
	result=[]
	i=idx
	while i<n+idx:
		result.insert(len(result),list[i])
		i+=1
	return result

l=getFistNElments(list,5,2)
print(l)

# 这样的代码太长，也太复杂，那么有更简单的方法吗？
l=list[:5] # 取前5个值
print(l)

l=list[-5:] # 取后5个值
print(l)

l=list[2:7] # 取2~7共5个值
print(l)

l=list[-2:-1] # 取倒数-2到倒数-1共1个值
print(l)

l=list[-1:-2] # 倒数-1到-2，取不到值，返回[]
print(l)

l=list[:10:2] # 前10个数，每两个取一个
print(l)

l=list[::5] # 所有值，每5个取一个
print(l)

l=list[:] # 复制整个list
print(l)