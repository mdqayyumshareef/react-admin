import React from 'react'
import Card from '../layout/card'

export default function Typography() {
    return (
        <Card>
            <div className="space-y-4">
                <h1>This is H1 Heading.</h1>
                <h2>This is H2 Heading.</h2>
                <h3>This is H3 Heading.</h3>
                <h4>This is H4 Heading.</h4>
                <h5>This is H5 Heading.</h5>
                <h6>This is H6 Heading.</h6>
                <p>
                    This is paragraph.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, repellat veniam impedit necessitatibus esse dignissimos qui voluptatum molestiae beatae! Fuga placeat debitis nisi a doloribus enim neque iusto ad vitae?
                </p>
            </div>
        </Card>
    )
}
