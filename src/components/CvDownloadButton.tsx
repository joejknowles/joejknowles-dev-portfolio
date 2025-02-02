const CvDownloadButton = () => {
    const monthAndYearFormatted = new Date().toLocaleDateString('en-GB', { day: "numeric", month: 'long', year: 'numeric' });
    return (
        <a
            href="/cv.pdf"
            className="bg-white text-sm text-gray-500 p-2 rounded flex flex-col items-center sm:flex"
            download={`Joe Knowles Fullstack React CV ${monthAndYearFormatted}.pdf`}
        >
            <img src="/logos/pdf.svg" alt="PDF" className="w-6 h-6" />
            <span className="mt-1">CV</span>
        </a>
    );
};

export default CvDownloadButton;
