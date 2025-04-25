import React from 'react';

const TableOfContents = ({ locations, currentIndex, onNavigate, onShowReferences }) => {
    return (
        <div style={{ padding: '15px' }}>
            <h3 style={{
                marginTop: 0,
                borderBottom: '1px solid #eee',
                paddingBottom: '10px'
            }}>
                Tour Locations
            </h3>

            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
            }}>
                {locations.map((location, index) => (
                    <li key={location.id} style={{
                        marginBottom: '8px',
                        borderLeft: index === currentIndex ? '3px solid #3498db' : '3px solid transparent',
                        paddingLeft: '8px'
                    }}>
                        <button
                            onClick={() => onNavigate(index)}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: '5px 0',
                                display: 'block',
                                width: '100%',
                                textAlign: 'left',
                                cursor: 'pointer',
                                color: index === currentIndex ? '#3498db' : '#333',
                                fontWeight: index === currentIndex ? 'bold' : 'normal'
                            }}
                        >
                            {location.title || location.name}
                        </button>
                    </li>
                ))}

                {/* References link at the bottom */}
                <li style={{
                    marginTop: '15px',
                    borderTop: '1px solid #eee',
                    paddingTop: '10px',
                    paddingLeft: '8px'
                }}>
                    <button
                        onClick={onShowReferences}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#666',
                            padding: '5px 0',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            textAlign: 'left',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        <span style={{ marginRight: '5px' }}>📚</span> References
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default TableOfContents; 