---
title: 校园外卖送
banner: /works/campus-delivery/banner.png
year: 2025
role: 项目主负责人
tags: [Spring Boot, Redis, SSM, Vue.js, Element UI, MySQL]
---

面向校园餐饮场景的外卖管理系统，将菜品维护、订单处理与经营数据汇总整合到统一管理端，帮助商家有序开展日常运营。

## 项目背景

校园餐饮管理涉及员工、菜品、套餐、订单和营业状态等多类信息。管理人员不仅需要及时维护在售内容，还需要跟进订单流转，并了解店铺的经营情况。

校园外卖送围绕这些日常工作，将基础数据、订单运营和数据统计集中到同一套后台中，减少信息分散带来的操作不便，让管理流程更清晰。

## 项目信息

- **开发时间**：2025 年 10 月。
- **我的职责**：项目主负责人。
- **技术栈**：Spring Boot、Redis、SSM、Vue.js、Element UI、MySQL。

## 核心功能

### 01 · 基础数据管理

覆盖员工、分类、菜品和套餐等基础信息。员工管理支持查询、新增与禁用；分类管理维护菜品和套餐分类；菜品与套餐支持增删改查，以及启售、停售操作。

<figure>
  <img src="/works/campus-delivery/cover.png" alt="菜品管理页面：菜品名称、分类和售卖状态筛选，以及新增、修改、删除和停售操作" width="1918" height="947" loading="lazy" />
  <figcaption>菜品管理：从分类筛选到售卖状态维护，集中处理日常菜单信息。</figcaption>
</figure>

### 02 · 订单与运营管理

处理用户提交的订单，支持订单查询、取消、派送和完成等操作。来单语音提醒辅助管理人员及时关注新订单，店铺营业状态设置则用于切换营业中与打烊中状态。

<figure>
  <img src="/works/campus-delivery/screenshot-02.png" alt="营业状态设置窗口，可选择营业中或打烊中并确认保存" width="458" height="507" loading="lazy" />
  <figcaption>营业状态设置：根据店铺运营安排切换接单状态。</figcaption>
</figure>

### 03 · 数据统计

通过营业额、用户数量等图形报表汇总经营数据，并支持 Excel 报表导出，方便管理人员查看、整理和分析餐厅运营情况。

详情顶部展示的是系统工作台，集中呈现今日数据、订单状态以及菜品和套餐概览。

## 管理端模块

工作台、数据统计、订单管理、套餐管理、菜品管理、分类管理与员工管理构成管理端的主要功能入口。

<figure>
  <img src="/works/campus-delivery/screenshot-01.png" alt="管理端导航：工作台、数据统计、订单管理、套餐管理、菜品管理、分类管理、员工管理" width="232" height="586" loading="lazy" />
  <figcaption>侧边导航：按业务模块组织管理功能。</figcaption>
</figure>
