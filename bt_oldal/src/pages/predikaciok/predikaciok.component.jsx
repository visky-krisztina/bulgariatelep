import React, { useState, useContext, useEffect } from "react";
import "./predikaciok.styles.scss";
import Predikacio from "./Predikacio";
import TitleH1 from "../../components/title_h1/titleH1.component";
import ResponsivePlayer from "../../components/videoPlayer/ResponsivePlayer.component";
import videoData from "../../data/videoData";
import Hero from "../../components/hero/hero.component";
import axios from "axios";
import { DataContext } from "../../contexts/DataProvider.js";
import Pagination from "../../components/pagination/Pagination";

function Predikaciok() {
	const { hero } = useContext(DataContext);
	const [sermons, setSermons] = useState([]);
	const [filteredSermons, setFilteredSermons] = useState([]);
	const [books, setBooks] = useState([]);
	const [series, setSeries] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedBook, setSelectedBook] = useState("");
	const [selectedSeries, setSelectedSeries] = useState("");
	const itemsPerPage = 10;

	useEffect(() => {
		async function fetchData() {
			try {
				const sermonDataResponse = await axios.get("/api/other/sermons");
				const sortedSermons = sermonDataResponse.data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort sermons by date (newest first)
				setSermons(sortedSermons);

				// Extract unique books and series for dropdowns
				const uniqueBooks = [...new Set(sortedSermons.map((sermon) => sermon.book))];
				const uniqueSeries = [...new Set(sortedSermons.map((sermon) => sermon.series))];

				setBooks(uniqueBooks);
				setSeries(uniqueSeries);
			} catch (error) {
				console.error("Error fetching data", error);
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		let filtered = sermons;

		if (selectedBook) {
			filtered = filtered.filter((sermon) => sermon.book === selectedBook);
		}

		if (selectedSeries) {
			filtered = filtered.filter((sermon) => sermon.series === selectedSeries);
		}

		setFilteredSermons(filtered);
		setCurrentPage(1); // Reset to first page when filters change
	}, [selectedBook, selectedSeries, sermons]);

	useEffect(() => {
		// Reset other filter when one is changed
		if (selectedBook && selectedSeries) {
			setSelectedSeries("");
		} else if (!selectedBook && !selectedSeries) {
			// No filter selected, display all sermons
			setFilteredSermons(sermons);
			setCurrentPage(1);
		}
	}, [selectedBook, selectedSeries]);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredSermons.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(filteredSermons.length / itemsPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<main>
			{hero.map((obj, i) => {
				return obj.page === "predikaciok" ? (
					<Hero key={i} title={obj.heroTitle} bibleVerse={obj.bibleVerse} src={obj.image} alt={obj.headline} />
				) : null;
			})}
			<section className='sermonContainer'>
				<ResponsivePlayer
					headline={videoData[0].headline}
					author={videoData[0].author}
					date={videoData[0].date}
					p1={videoData[0].p1}
					url={videoData[0].url}
					tags={videoData[0].tags}
					cName={videoData[0].cName}
					width={videoData[0].width}
					height={videoData[0].height}
				/>
				<div className='sermonArchivum'>
					<div className='underline'></div>
					<TitleH1 title='Prédikáció Archívum' />
					<div className='underline'></div>
					<div className='filters'>
						<select
							onChange={(e) => {
								setSelectedBook(e.target.value);
								// Reset series filter when book filter changes
								setSelectedSeries("");
							}}
							value={selectedBook}
						>
							<option value=''>Összes Könyv</option>
							{books.map((book, index) => (
								<option key={index} value={book}>
									{book}
								</option>
							))}
						</select>
						<select
							onChange={(e) => {
								setSelectedSeries(e.target.value);
								// Reset book filter when series filter changes
								setSelectedBook("");
							}}
							value={selectedSeries}
						>
							<option value=''>Összes Sorozat</option>
							{series.map((ser, index) => (
								<option key={index} value={ser}>
									{ser}
								</option>
							))}
						</select>
					</div>
					<div className='archivumContainer'>
						<h3>
							A prédikáció cimére kattintva érhető el az istentisztelet a facebook-on, amelynek keretén belül van a
							kivánt igehirdetés.
						</h3>
						<table>
							<thead>
								<tr>
									<th>Datum</th>
									<th>Téma</th>
									<th>Igehirdető</th>
									<th>Könyv</th>
									<th>Sorozat</th>
								</tr>
							</thead>
							<tbody>
								<Predikacio sermons={currentItems} />
							</tbody>
						</table>
						<div className='pagination-div'>
							{/* <button>Prev</button>
							<button>1</button>
							<button>Next</button> */}
							<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Predikaciok;
