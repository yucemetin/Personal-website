import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Type() {
    return (
        <Typewriter
            options={{
                strings: ['METIN YUCE', 'SOFTWARE ENGINEER', 'FULL-STACK ENGINEER'],
                autoStart: true,
                loop: true,
            }}
        />
    )
}
