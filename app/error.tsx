'use client';

export default function Error({ error, reset, }: { error: Error ,reset: () => void }) {
    return (
        <div>
            <h1>error, some thing went wrong!</h1>
            {error.message}
        </div>
    );
}