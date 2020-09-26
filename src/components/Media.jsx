import React from 'react';

import Card from './Card';

export default props => {
    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Média: </span>
                    <strong>10</strong>
                </span>
            </div>

        </Card>
    )
}