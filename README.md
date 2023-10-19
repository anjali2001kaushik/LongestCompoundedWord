# LongestCompoundedWord
This Git repository hosts the "Longest Compounded Word Project," a JavaScript application that uses Trie data structures, arrays, and Node.js modules (path, fs, readline) to find the longest compounded word from a list of words. 
A compounded word is constructed by combining two or more words from the list. 
The project efficiently utilizes a Trie data structure for word lookup and array manipulation for word management.

 To set up and run this project you need to do:- node index.js

 Approach and idea behind the code:-
 The code is a simple Trie implementation.
 The TrieNode class contains the data that will be stored in the trie, and it also contains a constructor function which initializes the map with no children. 
 The Trie class implements an insert method which iterates through all of the characters in word and stores them into a new node if they are not already present in the trie.
 The search method iterates through all of the characters in word and returns false if they are not found or true if they were found.
 The buildTrie function takes in a filePath argument that will be passed into it as the first parameter,
 and returns a Promise object with two parameters: resolve and reject . 
 The promise will be resolved when all files have been read from the input path, or rejected if any errors occur during reading.
We iterate through all the nodes in the tree, and checks if they are at the end of a word.
If they are, then it will check to see which node has the longest word. 
If that node is not at the end of a word, then it will check to see which node has the second longest word. 
This Algorithm  is called depth-first search (DFS). 
