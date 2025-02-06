# 依赖注入

::: tip

阅读本文前,请确保了解依赖注入相关知识

:::

本项目使用[DryIoc](https://github.com/dadhi/DryIoc)作为依赖注入支持库


## 注册时间点

- 插件初始化

务必将注册统一放置在初始化时,防止重复注册

## 可用服务

本项目提供了一些可用服务

- CompressService 压缩/解压服务
- ResponderService 响应器服务
- ICallableService 事件服务
- INotifyService 通知服务
