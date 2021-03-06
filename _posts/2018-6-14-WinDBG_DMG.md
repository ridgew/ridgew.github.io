﻿---
layout: post
title: 使用WinDBG调试转储文件(DMP)  
date: 2018-6-14
tag: windbg dmp
---


#DMP文件生成

##1.直接在任务管理器的进程中右键创建“小型转储文件”
 ![](/images/dmp_create_from_process.png)

##2.使用DbgHelp.dll接口生成

```C#

[Flags]
public enum MiniDumpType
{
    MiniDumpFilterMemory = 8,
    MiniDumpFilterModulePaths = 0x80,
    MiniDumpFilterTriage = 0x100000,
    MiniDumpIgnoreInaccessibleMemory = 0x20000,
    MiniDumpNormal = 0,
    MiniDumpScanMemory = 0x10,
    MiniDumpValidTypeFlags = 0x1fffff,
    MiniDumpWithCodeSegs = 0x2000,
    MiniDumpWithDataSegs = 1,
    MiniDumpWithFullAuxiliaryState = 0x8000,
    MiniDumpWithFullMemory = 2,
    MiniDumpWithFullMemoryInfo = 0x800,
    MiniDumpWithHandleData = 4,
    MiniDumpWithIndirectlyReferencedMemory = 0x40,
    MiniDumpWithModuleHeaders = 0x80000,
    MiniDumpWithoutAuxiliaryState = 0x4000,
    MiniDumpWithoutOptionalData = 0x400,
    MiniDumpWithPrivateReadWriteMemory = 0x200,
    MiniDumpWithPrivateWriteCopyMemory = 0x10000,
    MiniDumpWithProcessThreadData = 0x100,
    MiniDumpWithThreadInfo = 0x1000,
    MiniDumpWithTokenInformation = 0x40000,
    MiniDumpWithUnloadedModules = 0x20
}

[StructLayout(LayoutKind.Sequential)]
public struct MiniDumpExceptionInfo
{
    public int ThreadId;
    public IntPtr ExceptionPointers;
    public bool ClientPointers;
}


public static class MiniDumpUtil
{
    // Methods
    [DllImport("kernel32.dll")]
    private static extern int GetCurrentThreadId();
    [DllImport("DbgHelp.dll")]
    private static extern bool MiniDumpWriteDump(IntPtr hProcess, int processId, IntPtr fileHandle, MiniDumpType dumpType, ref MiniDumpExceptionInfo excepInfo, IntPtr userInfo, IntPtr extInfo);
    [DllImport("DbgHelp.dll")]
    private static extern bool MiniDumpWriteDump(IntPtr hProcess, int processId, IntPtr fileHandle, MiniDumpType dumpType, IntPtr excepParam, IntPtr userInfo, IntPtr extInfo);
    public static bool TryWriteMiniDump(string dmpFileName, MiniDumpType dmpType)
    {
        using (FileStream stream = new FileStream(dmpFileName, FileMode.OpenOrCreate))
        {
            Process currentProcess = Process.GetCurrentProcess();
            MiniDumpExceptionInfo excepInfo = new MiniDumpExceptionInfo {
                ThreadId = GetCurrentThreadId(),
                ExceptionPointers = Marshal.GetExceptionPointers(),
                ClientPointers = true
            };
            if (excepInfo.ExceptionPointers == IntPtr.Zero)
            {
                return MiniDumpWriteDump(currentProcess.Handle, currentProcess.Id, stream.SafeFileHandle.DangerousGetHandle(), dmpType, IntPtr.Zero, IntPtr.Zero, IntPtr.Zero);
            }
            return MiniDumpWriteDump(currentProcess.Handle, currentProcess.Id, stream.SafeFileHandle.DangerousGetHandle(), dmpType, ref excepInfo, IntPtr.Zero, IntPtr.Zero);
        }
    }

    public static bool WriteMiniDumpNoPointer(string dmpFileName, MiniDumpType dmpType)
    {
        using (FileStream stream = new FileStream(dmpFileName, FileMode.OpenOrCreate))
        {
            Process currentProcess = Process.GetCurrentProcess();
            return MiniDumpWriteDump(currentProcess.Handle, currentProcess.Id, stream.SafeFileHandle.DangerousGetHandle(), dmpType, IntPtr.Zero, IntPtr.Zero, IntPtr.Zero);
        }
    }
}

```