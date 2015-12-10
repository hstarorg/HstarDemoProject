# Python中基本数据类型有整数、浮点数、字符串、布尔值和空值
# Python中变量名必须是大小写英文、数字和_的组合，且不能用数字开头
# Python中没有常量关键字，但是约定用全大写命名的变量作为常量，如果要修改，也没人拦得住你

# 整数
v=1
print(v)

# 浮点数
v=1.1
print(v)

# 字符串
v='test'
print(v)

# 转义字符
v='This is\nNew Line\''
print(v)

# 利用r前缀表示字符不转义
v=r'This is\nNew Line\''
print(v)

# 多行字符写法,利用'''具体字符'''表示多行字符
v='''Line1
	Line2
Line3
'''
print(v)

# 布尔值只有True和False两个，注意大小写(写错了会语法错误)
v=True
print(v)
v=False
print(v)

# 布尔值运算关键字为and、or和not
v=True and False
print(v)
v=True or False
print(v)
v=not False
print(v)

# 空值是Python里一个特殊的值,用None表示
v=None
print(v)

