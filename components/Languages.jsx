import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Courses from './Courses';
import { Drawer } from '@mui/material';

const CoursesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LatestProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
const Title = styled.h1`
  margin-bottom: 3rem;;
  font-weight:500;
  width: fit-content;
`;
const Languages = () => {
   const arr = [
        {
            "id": 1,
            "name": "Python",
            "image": "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png",
            "description": "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
            "link": "https://www.python.org/"
        },
        {
            "id": 2,
            "name": "JavaScript",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
            "description": "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
            "link": "https://www.javascript.com/"
        },
        {
            "id": 3,
            "name": "C++",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
            "description": "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.",
            "link": "https://www.cplusplus.com/"
        },
        {
            "id": 4,
            "name": "Java",
            "image": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
            "description": "Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers 'write once, run anywhere' (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",
            "link": "https://www.java.com/en/"
        },
        {
            "id": 5,
            "name": "C",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/1200px-The_C_Programming_Language_logo.svg.png",
            "description": "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computers ranging from supercomputers to embedded systems.",
            "link": "https://en.wikipedia.org/wiki/C_(programming_language)"
        },
        {
            "id": 6,
            "name": "C#",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png",
            "description": "C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed around 2000 by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2018). C# is one of the programming languages designed for the Common Language Infrastructure.",
            "link": "https://docs.microsoft.com/en-us/dotnet/csharp/"
        },
        {
            "id": 7,
            "name": "PHP",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",
            "description": "PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.",
            "link": "https://www.php.net/"
        },
        {
            "id": 8,
            "name": "HTML",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
            "description": "HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
            "link": "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
            "id": 9,
            "name": "CSS",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
            "description": "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.",
        },

    ]
  return (
    <CoursesWrapper>
    <LatestProjects>
      <Title>Explore courses you are interested in...</Title>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs:8, sm: 10, md: 12 }}>
        {arr.map((item) => (
                <Courses key={item.id} item ={item}/>
        ))}
      </Grid>
      <Drawer/>
    </LatestProjects>
    </CoursesWrapper>
    
  )
}

export default Languages
