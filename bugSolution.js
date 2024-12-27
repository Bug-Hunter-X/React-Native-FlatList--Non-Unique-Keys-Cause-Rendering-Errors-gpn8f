```javascript
// Correct usage with unique keys
<FlatList
  data={[{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}, {id: 3, name: 'Item 3'}]}
  renderItem={({item}) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.id} // id is unique
/>

// Alternative using index if no unique identifier is available (less efficient)
<FlatList
  data={[{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}]}
  renderItem={({item}) => <Text>{item.name}</Text>}
  keyExtractor={(item, index) => index.toString()}
/>
```