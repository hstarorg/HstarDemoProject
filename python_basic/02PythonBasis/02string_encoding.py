# Python最开始只支持ASCII编码，后来增加了Unicode编码的支持

# ACCII值与字符之间的转换
v=65
# 将数字转换为对应的ASCII字符，chr函数
result=chr(65)
print(result)

# 将字符转换为对应的ASCII值，ord函数
result=ord(result)
print(result)

# 定义Unicode字符串
uStr=u'Unicode String'
print(uStr)
uStr=u'我是中国人'
print(uStr)

# 字符串编码转换
uStr=uStr.encode('utf-8')
print(uStr) # b'\xe6\x88\x91\xe6\x98\xaf\xe4\xb8\xad\xe5\x9b\xbd\xe4\xba\xba'

# 字符串长度计算
print(len(u'abc'))  # 3
print(len('中国'))  # 2
print(len(u'中国')) # 2
print(len(u'中国'.encode('utf-8')))  # 6

# 字符串格式化 包含%s、%d、%f和%x ,注意写法
print('Hello,%s Nice to meet you.Test num:%d' %('Jay',10))

# 对于%d和%f，可以指定补0的位数和小数位数
# %05d表示数字不足五位，那么占五位，以0补位；%5d同前面，但是以空格补位
print('Test:%05d--%5d' %(1,2))

# %.5f表示，小数位不足5位，末尾补0
print('Test:%.5f' %(0.1))