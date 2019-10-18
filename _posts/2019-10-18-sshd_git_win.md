---
layout: post
title: windows git-bash下, 启动sshd
date: 2019-10-18
tag: sshd
---

先编辑C:\Program Files (x86)\Git\etc\ssh下的conf文件, 比如端口等,
然后生成服务器端秘钥



ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key <br/>
ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key


启动 /usr/bin/sshd <br />
kill 关闭
