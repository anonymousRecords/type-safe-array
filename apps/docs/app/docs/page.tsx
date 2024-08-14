import DocsPage from '../components/DocPage';
import { methodsData } from '../data/methodData';

export default function Docs() {
  return <DocsPage methods={methodsData} />;
}
