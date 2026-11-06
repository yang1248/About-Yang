---
title: AI Companion
banner: /works/ai-companion/cover.png
year: 2026
role: Project lead
tags: [Python, Streamlit, OpenAI SDK, DeepSeek, JSON]
---

A Streamlit-based text chat application with customizable character names and personalities, streaming replies, and saved conversation histories that users can switch between, restore, or delete.

## Background

Character-based conversations place more emphasis on a consistent tone and continuing context than one-off questions do. Users need a way to adjust the character and return to earlier conversations without repeatedly explaining the background.

This lightweight prototype brings character settings, model interaction, and session management into one interface to explore everyday text conversations with large language models.

## Project overview

- **Development date**: October 2026.
- **My role**: Project lead.
- **Interface and state**: Python, Streamlit, and Session State.
- **Model integration**: DeepSeek through an OpenAI-compatible SDK.
- **Session storage**: Local JSON files.

## Core features

### 01 · Custom character settings

Edit the character name and personality in the sidebar. These settings are incorporated into the system prompt to guide the language and conversation style. They are saved alongside the messages and restored when a historical session is opened.

### 02 · Multi-turn chat and streaming replies

Send messages through a chat input and display separate user and AI messages. Requests include the system prompt and the current session history. Response fragments are accumulated and rendered as they arrive rather than waiting for the entire reply.

### 03 · Conversation management

Create sessions, browse history, switch conversations, and delete saved records. Timestamp-based session names are listed in descending order so recent conversations are easy to find.

Deleting the active session clears its messages and creates a new session identifier, avoiding continued use of a deleted record.

### 04 · Session persistence and restoration

Save the character name, personality, session identifier, and message history in JSON. Loading a saved session restores these fields so users can continue the conversation rather than simply view a transcript.

## Implementation

- **State management**: Streamlit Session State retains messages, character settings, and the active session identifier across interface reruns.
- **Streaming output**: Incremental model responses update the chat component; the complete reply is then added to the message history and saved.
- **File storage**: Read and write UTF-8 JSON files by session identifier, with listing and deletion support.
- **Model configuration**: Read the API key from an environment variable instead of embedding it in source code or portfolio content.

The screenshot above shows the chat interface, character settings, and session history.

## Current scope and future directions

The current prototype provides text chat and file-based session management. Restoring conversation history is not the same as cross-session long-term memory, and does not imply cross-device synchronization.

LangChain / LangGraph orchestration, MCP tools, multiple model providers, long-term memory, proactive reminders, and voice interaction are possible future directions, not currently implemented features.

The AI character is an interaction experience, not a replacement for real-world human support or professional medical or mental health advice. More comprehensive privacy controls and safety mechanisms require separate design and validation before broader product use.
