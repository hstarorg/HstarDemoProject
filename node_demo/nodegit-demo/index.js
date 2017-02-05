const path = require('path');
const Git = require('nodegit');

// Git.Clone('http://trgit2/jh3r/git-test.git', 'git-test', {})
// 	.then(repo => {
// 		console.log(repo);
// 	}).catch(err => {
// 		console.error(err);
// 	});

// return;

let globalRepo;
let globalIndex;
let globalOid;

Git.Repository.open('git-test/.git')
	.then(repo => {
		globalRepo = repo;
		return repo;
	})
	.then(repo => {
		return globalRepo.refreshIndex();
	})
	.then(indexResult => { // Add 
		globalIndex = indexResult;
		return globalIndex.addByPath('user1/1.txt');
	})
	.then(() => { // 写Index
		return globalIndex.write();
	})
	.then(() => { // 写Index Tree
		return globalIndex.writeTree();
	})
	.then(oidResult => { // 创建引用
		globalOid = oidResult;
		console.log(oidResult);
		return Git.Reference.nameToId(globalRepo, 'HEAD');
	})
	.then(head => { // 获取Commit
		return globalRepo.getCommit(head);
	})
	.then(parent => { // 真正提交
		let author = Git.Signature.create('Jay', 'hm910705@163.com', Date.now() / 1000, 0);
		let committer = Git.Signature.create('Jay.M.Hu', 'jay.m.hu@newegg.com', Date.now() / 1000, 0);
		return globalRepo.createCommit('HEAD', author, committer, 'Commit by zailaiyici', globalOid, [parent]);
	})
	.then(commitId => {
		console.log('commit id:', commitId);
	})
	.then(() => {
		return Git.Remote.lookup(globalRepo, 'origin');
	})
	.then(remote => {
		return remote.push(["refs/heads/master:refs/heads/master"], {
			callbacks: {
				credentials: function (url, userName) {
					return Git.Cred.userpassPlaintextNew('username', 'xxxpassword');
				}
			}
		});
	})
	.then((statusCode) => {
		console.log('push ok', statusCode);
	})
	.catch(reason => {
		console.error('Error', reason);
	});
