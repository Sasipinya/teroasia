'use client';

import { useState, useEffect, useRef } from 'react';
import LoadingSpinner from "./components/utils/LoadingSpinner";
const InfiniteScroll = ({ 
  fetchData, 
  renderItem, 
  pageSize = 10,
  threshold = 0.5 
}) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();
  const loadingRef = useRef();

  const loadMoreItems = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newItems = await fetchData(page, pageSize);
      if (newItems.length < pageSize) {
        setHasMore(false);
      }
      setItems(prevItems => [...prevItems, ...newItems]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreItems();
        }
      },
      { threshold }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, loading]);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index}>
          {renderItem(item)}
        </div>
      ))}
      {hasMore && (
        <div ref={loadingRef} className="w-full py-4 text-center">
          {loading ? <LoadingSpinner/> : ''}
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;