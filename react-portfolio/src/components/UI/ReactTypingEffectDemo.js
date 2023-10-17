import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const ReactTypingEffectDemo = () => {
  return (
    <>
      <ReactTypingEffect 
        text={["Color Designer", "Photoshop Artist", "2D Animator"]}
        style={{ fontSize: "38px" }}
      />
      <br />
      {/* <ReactTypingEffect
        text={["Color Designer", "Photoshop Artist", "2D Animation"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1 style={{ fontSize: "38px" }}>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'magenta'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}
      /> */}
    </>
  )
}

export default ReactTypingEffectDemo;