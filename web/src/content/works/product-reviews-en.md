---
title: Product Reviews
banner: /works/product-reviews/banner.png
year: 2026
role: Project lead
tags: [Spring Boot, MySQL, Redis]
---

A mobile web review application combining nearby business discovery, visit notes, and coupon flash sales with practical Redis data structures, caching strategies, and concurrency control.

## Background

A local review application connects several workflows: finding nearby businesses, browsing visit notes, following other users, and claiming coupons. These require both frequent information queries and handling concentrated bursts of transaction requests.

This project uses those workflows to explore coordination between the cache and database, flash-sale inventory control, and the application of Redis data structures to everyday product features.

## Project overview

- **Development date**: January 2026.
- **My role**: Project lead.
- **Technology stack**: Spring Boot, MySQL, and Redis.
- **Focus**: A mobile web business-review application and practical Redis engineering.

## Core features

### 01 · Business discovery and visit notes

Browse businesses by category, find nearby stores with location-based queries and distance sorting, publish visit notes, and browse content and popular reviews.

<figure>
  <img src="/works/product-reviews/cover.png" alt="Review app home screen with business search, service categories, visit-note recommendations, and bottom navigation" width="403" height="888" loading="lazy" />
  <figcaption>The home screen combines business categories and visit notes for local discovery.</figcaption>
</figure>

### 02 · Social interaction

Like posts, follow users, find shared follows, and view posts from followed users. These interactions connect business discovery with community content.

<figure>
  <img src="/works/product-reviews/screenshot-01.png" alt="Visit-note detail with a restaurant image, description, follow action, and like and comment controls" width="400" height="880" loading="lazy" />
  <figcaption>Visit-note details bring content and interaction controls together.</figcaption>
</figure>

### 03 · Accounts and sign-in

Support phone verification-code login, profile management, and daily check-ins. The screenshot at the top shows the profile page, with profile editing, notes, reviews, followers, and following sections.

### 04 · Coupon flash sales

Provide coupon queries and purchase attempts, focusing on inventory validation and a one-order-per-user rule to address overselling and duplicate orders during traffic bursts.

## Technical challenges and approaches

### Cache management

- **Cache penetration**: Explore caching empty results and Bloom filters for queries targeting nonexistent data.
- **Cache breakdown**: Use approaches such as mutex locks and logical expiration for hot-key expiration.
- **Cache avalanches**: Randomize TTL values to spread expiration times.
- **Data consistency**: Apply Cache Aside and coordinate database updates with cache invalidation to reduce inconsistency risks.

### Flash sales and concurrency

Use Redis and Lua scripts to make inventory deductions and one-order-per-user validation atomic. Distributed locking addresses concurrent access across application instances.

### Redis data structures in practice

- **ZSet**: Like rankings.
- **Set**: Shared follows through set intersections.
- **GEO**: Nearby business queries and distance sorting.
- **BitMap**: User check-in records.

## Future directions

Potential extensions include asynchronous order creation with RabbitMQ or Redis Stream, and UV statistics with HyperLogLog. These are future optimization directions, not claims of currently delivered features or measured performance results.
