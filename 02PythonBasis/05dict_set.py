# 和list比较，dict有以下几个特点：
# 查找和插入的速度极快，不会随着key的增加而增加；
# 需要占用大量的内存，内存浪费多。
# 而list相反：
# 查找和插入的时间随着元素的增加而增加；
# 占用空间小，浪费内存很少。
# dict的key必须为不可变对象，如字符串和数字

# 申明字典对象
dict={'key1':'value1','key2':2}
print(dict['key1'])
print(dict['key2'])

# 可以动态添加key value，如果key重复，则会覆盖
dict['key3']='value3'
print(dict['key3'])
dict['key2']='value2'
print(dict['key2'])

# 如果访问没有的key，那么会报错KeyError
# dict['key4'] KeyError:'key4'
# 一般用in来检查下
if 'key4' in dict:
	print(dict['key4'])
else:
	print('key4 not in dict')

# 还可以通过字典方法get来获取值
# 不存在可以返回None
print(dict.get('key4'))
# 还可以设置当key不存在时，所返回的value
print(dict.get('key4','default value'))

# 字典数据的删除，利用dict的pop(key)方法，如果删除没有的key，同样会报KeyError
dict.pop('key3')
print(dict) 


# set,无序和无重复元素的集合
# 定义set，包含三个元素
set=set([1,2,3])
print(set)
# 通过add增加元素，如果元素重复，增加是无效的
set.add(3) #可以添加重复元素
print(set)
set.add(4)
print(set)
# 通过remove删减元素
set.remove(4)
print(set)
# 如果移除不存在的元素，则会KeyError
# set.remove(4)
# print(set)