import React from 'react'
import UseCallbackDemo from '../../components/Tutorial/04/UseCallbackDemo'
import UseMemoDemo from '../../components/Tutorial/04/UseMemoDemo'
import UseContextDemo from '../../components/Tutorial/04/UseContextDemo'

export default function HookTut04() {
    return (
        <div>
            <h4>Tutorial 04: useCallback,useMemo,context Api</h4>
            <hr />
            <div>
                <ol>
                    <li>
                        useCallback
                        <ul>
                            <li>Used For Memorization</li>
                            <li>Prevent for unnecessar rendering.</li>
                            <li>Used for memo when pass function as argument.</li>
                        </ul>
                    </li>
                    <UseCallbackDemo />
                    <br />
                    <br />
                    <li>
                        useMemo
                        <ul>
                            <li>Used For Memorization</li>
                            <li>Used when computational task needed.</li>
                        </ul>
                    </li>
                    <UseMemoDemo />
                    <br />
                    <br />
                    <li>
                        useContext Api
                        <ul>
                            <li>Used For Pass the state between the independent component.</li>
                        </ul>
                    </li>
                    <UseContextDemo />
                    
                </ol>
            </div>
        </div>
    )
}
