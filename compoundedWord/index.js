class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children.has(char)) {
          return false;
        }
        node = node.children.get(char);
      }
      return node.isEndOfWord;
    }
  }
  
  const fs = require('fs');
  const path = require('path');
  const readline = require('readline');
  
  const FileInputPath = [
    path.join(__dirname, 'Input_01.txt'),
    path.join(__dirname, 'Input_02.txt')
  ];
  
  //Function for reading  a file 
  function buildTrie(filePath) {
    return new Promise((resolve, reject) => {
      const trie = new Trie();
      const rl = readline.createInterface({
        input: fs.createReadStream(filePath),
        output: process.stdout,
        terminal: false
      });
  
      rl.on('line', (line) => {
        trie.insert(line.trim());
      });
  
      rl.on('close', () => {
        resolve(trie);
      });
    });
  }
  
  // Function to find the longest and sec longest compounded words
  function LongestCompoundedWords(trie) {
    let longestWord = '';
    let secondLongestWord = '';
  
    function dfs(node, currentWord) {
      if (node.isEndOfWord) {
        if (currentWord.length > longestWord.length) {
          secondLongestWord = longestWord;
          longestWord = currentWord;
        } else if (currentWord.length > secondLongestWord.length) {
          secondLongestWord = currentWord;
        }
      }
  
      for (const [char, child] of node.children) {
        dfs(child, currentWord + char);
      }
    }
  
    dfs(trie.root, '');
  
    return { longestWord, secondLongestWord };
  }
  
  async function main() {
    const start = new Date();
  
    const triePromises = FileInputPath.map(buildTrie);
    const tries = await Promise.all(triePromises);
  
    const combinedTrie = new Trie();
    for (const trie of tries) {
      combinedTrie.root.children = new Map([...combinedTrie.root.children, ...trie.root.children]);
    }
  
    const { longestWord, secondLongestWord } = LongestCompoundedWords(combinedTrie);
  
    const end = new Date();
    const processingTime = (end - start) / 1000; //For time in seconds
  
    console.log('Longest Compounded Word:', longestWord);
    console.log('Second Longest Compounded Word:', secondLongestWord);
    console.log('Time taken to process the input files:', processingTime, 'seconds');
  }
  
  main();
  