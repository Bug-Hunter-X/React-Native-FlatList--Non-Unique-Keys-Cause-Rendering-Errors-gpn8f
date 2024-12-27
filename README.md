# React Native FlatList: Non-Unique Keys Cause Rendering Errors

This repository demonstrates a common error in React Native when using the `FlatList` component: providing non-unique keys to the data items. This can lead to a variety of unexpected rendering behaviors and performance problems.

## Problem
The `FlatList` component relies on unique keys to efficiently manage and render list items. When keys are not unique, the `FlatList` may struggle to correctly identify and update individual items, leading to incorrect rendering or the inability to properly update items. 

## Solution
The solution involves ensuring that each item in your data array has a unique key. This key should be a string or number that uniquely identifies the item.  You provide this key using the `keyExtractor` prop of the `FlatList` component.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` (or `npx react-native run-ios`).
4. Observe the incorrect rendering of the FlatList.

## Fixing the Bug
Examine the `bugSolution.js` file to see how to correctly implement unique keys, solving the rendering issues.