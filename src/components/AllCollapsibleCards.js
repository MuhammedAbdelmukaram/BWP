import React, { useState } from 'react';
import CollapsibleCard from './CollapsibleCard';

const CollapsibleCards = ({ data }) => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = data.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div style={{marginTop:50}}>
            {/* Render Collapsible Cards */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selectedData.map((item, index) => (
                    <CollapsibleCard key={index} data={item} />
                ))}
            </div>

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                {Array.from({ length: maxPage }, (_, i) => i + 1).map((pageNumber) => (
                    <span
                        key={pageNumber}
                        style={{ cursor: 'pointer' }}
                        onClick={() => goToPage(pageNumber)}
                        className={currentPage === pageNumber ? 'dotActive' : 'dot'}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default CollapsibleCards;
