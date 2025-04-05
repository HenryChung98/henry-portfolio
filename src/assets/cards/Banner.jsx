import { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import cpp from "highlight.js/lib/languages/cpp";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("cpp", cpp);

export default function Banner() {
  useEffect(() => {
    hljs.highlightAll(); 
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[500px]">
        <a
          className="text-3d uppercase"
          href="https://henry-chung-3d-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View 3D Portfolio
        </a>
        <pre className="rounded-lg bg-gray-800 p-4 overflow-x-auto">
          <code className="language-cpp">
    
            {`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, I'm Henry Chung" << endl;
    return 0;
}`}
          </code>
        </pre>
      </div>
    </>
  );
}
