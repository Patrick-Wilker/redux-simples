import React from 'react';

import Card from './Card';

export default props => {
    return (
        <Card title="Sorteio de um número" purple>
            <div>
                <span>
                    <span>Resutado: </span>
                    <strong>{8}</strong>
                </span>
            </div>
        </Card>
    )
}