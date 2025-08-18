import React from 'react';
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default {
  // Reusing the default mapping
  ...MDXComponents,
  Tabs,
  TabItem,
};