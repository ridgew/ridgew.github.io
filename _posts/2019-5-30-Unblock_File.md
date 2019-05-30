---
layout: post
title: 使用PowerShell批量解除锁定下载的文件
date: 2019-5-30
tag: AlternateStream unblock winapi 解除锁定
---

  ### 1.信息查看工具：
  http://www.nirsoft.net/utils/alternate_data_streams.html
   AlternateStreamView is a small utility that allows you to scan your NTFS drive, and find all hidden alternate streams stored in the file system. After scanning and finding the alternate streams, you can extract these streams into the specified folder, delete unwanted streams, or save the streams list into text/html/csv/xml file.


  ### 2.使用PowerShell批量解除锁定下载的文件

　在需要解锁的文件所在的文件夹中空白处，按住Shift然后单击右键，在弹出的右键菜单中，选择“在此处打开PowerShell窗口”，输入Get-ChildItem | Unblock-File，然后一个回车，这个文件夹中的所有被锁定的文件都解锁了，可以无阻碍的打开了。

   附加：递归文件操作命令
   Get-ChildItem "Directory" -Recurse | Unblock-File

 ### 3. 文件系统格式参考文章：
   NTFS格式下的Alternate Data Streams
   https://www.cnblogs.com/luverose/p/4245355.html

