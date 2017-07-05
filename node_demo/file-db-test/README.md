# 参与测试的Pacakge

1. LowDB
2. LokiJS
3. Nedb
4. Level
5. locallydb
6. Sqlite3
7. MongoDB


# 测试结论：

MongoDB > LokiJS > Lowdb > Nedb > Localydb

**注意：LokiJS 大量数据（10000条测试数据）时，未成功持久化。**

**注意2：Level 需要node-gyp**

**注意3：Sqlite 需要node-gyp，从效果来看，是最好的，非常稳定。100条测试数据，4s左右。**

**MongoDB吊打各类，当然这样对比本身不公平。**
