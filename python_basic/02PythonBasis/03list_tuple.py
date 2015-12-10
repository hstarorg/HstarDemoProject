# 使用List
list=['a','b','c']
print(list) # ['a', 'b', 'c']
print(len(list)) # 3

# List可以使用索引取值，超过list长度会索引越界，可以通过符号倒数取值，比如-1，表示倒数第一个值
print(list[0]) # 'a'
print(list[-1]) # 'c'

# 数组操作

# 追加数组
list.insert(0,'000')
print(list)

# 在末尾追加元素，则需要指定一个大于等于list长度的索引
list.insert(len(list)+5,'last')
print(list)

# 更改索引元素值，则直接针对list[index]赋值即可
list[0]='first'
print(list)

# 删除最后一个元素(删除的元素将作为返回值)
result=list.pop()
print(list,result)

# 删除指定索引的元素(删除的元素将作为返回值)
result=list.pop(0)
print(list,result)

# 二维数组
list=[[1,2],[3,4],[5,6]]
print(list)
print(list[1][1])

# 元祖tuple，定义后不可变
tuple=(1,2)
print(tuple)

# 元祖数据的使用，下标和负数下标，等同于list用法
# tuple[1]='gggg'  会失败，不能改变元素内容
print(tuple[1])
print(tuple[-1])

# 如何申明一个元素的tuple？由于只有一个元素是(1)具有二义性，所以如果要申明tuple，则需要加上末尾的逗号
tuple=(1,)
print(tuple)
tuple=(1)
print(tuple)

# 由于list是保存的引用，所以如下代码对应tuple来说是合法的（tuple自身内容没变）
tuple=([111,222],)
tuple[0][0]=333
print(tuple)