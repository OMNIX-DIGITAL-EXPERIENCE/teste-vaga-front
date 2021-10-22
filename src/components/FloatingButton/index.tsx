import React, { memo } from 'react';

import { useHistory } from 'react-router';

const FloatingButton: React.FC = () => {
    const history = useHistory()
    const handleBack = (() => {
        history.goBack()
    })
    return (
        <aside onClick={handleBack} className="fixed cursor-pointer transform-gpu transition-all hover:-skew-x-6 hover:bg-red-700 right-4 bottom-16 border-2 px-6 py-2">
            <p className="pb-px">Ops, errei meu nome!</p>
        </aside>
    )
}

export default memo(FloatingButton);