# 参与测试的Pacakge

1. LowDB
2. LokiJS
3. Nedb
4. Level
5. locallydb


# 测试结论：

Lowdb > Nedb > Localydb

LokiJS 大量数据时，未成功持久化。

Level 需要node-gyp

Sqlite 需要node-gyp，从效果来看，是最好的，非常稳定。100条测试数据，4s左右。
