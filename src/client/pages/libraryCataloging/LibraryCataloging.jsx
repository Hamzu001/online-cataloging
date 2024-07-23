import React, { useEffect, useRef, useState } from "react";
import Slider from "../../components/libraryCataloging/Slider";
import SearchForm from "../../components/libraryCataloging/SearchForm";
import SearchBookDetail from "../../components/libraryCataloging/SearchBookDetail";
import { useContext } from "react";
import { Context } from "../../context/Context";

const ImportantLinks = () => {
  const useFullLinks = [
    {
      title: "Allama Iqbal Open University (AIOU)",
      link: "http://library.aiou.edu.pk/",
    },
    {
      title: "Allama Iqbal Open University (AIOU)",
      link: "http://library.aiou.edu.pk/",
    },
    {
      title: "Allama Iqbal Open University (AIOU)",
      link: "http://library.aiou.edu.pk/",
    },
    {
      title: "Allama Iqbal Open University (AIOU)",
      link: "http://library.aiou.edu.pk/",
    },
    {
      title: "Allama Iqbal Open University (AIOU)",
      link: "http://library.aiou.edu.pk/",
    },
    {
      title: "Allama Iqbal Open University (AIOU)",
      link: "http://library.aiou.edu.pk/",
    },
  ];
  return (
    <div>
      <h2 className="text-xl text-red-800 font-semibold mb-2">Important Links:</h2>
      {useFullLinks.map((items, index) => (
        <div key={index} className="pt-2">
          {" "}
          <a
            className=" hover:underline text-blue-950 hover:text-red-800"
            href={items.link}
            target="_blank"
          >
            {items.title}
          </a>
        </div>
      ))}
    </div>
  );
};

const LibraryDetail = () => {
  return (
    <div className="p-2">
      <h1 className="font-bold text-xl">
        College Library Cataloging for Online Book Search
      </h1>
      <p className="mt-2 mb-2">
        In a college library, cataloging is a critical process that ensures
        students, faculty, and staff can efficiently find and access books and
        other resources. The evolution of digital technologies has transformed
        traditional cataloging systems into robust online catalogs, enhancing
        accessibility and user experience. Here’s an overview of how college
        library cataloging works, particularly for online book searches.
      </p>

      <h2 className="font-bold text-xl">1. Cataloging Systems</h2>
      <h3 className="font-bold">a. Integrated Library Systems (ILS)</h3>
      <p className="mt-2 mb-2">
        Most college libraries use an Integrated Library System, which is a
        comprehensive software that manages library operations, including
        cataloging, circulation, and inventory. Popular ILSs include Ex Libris
        Alma, SirsiDynix Symphony, and Koha.
      </p>

      <h3 className="font-bold">b. Metadata Standards</h3>
      <p className="mt-2 mb-2">
        Libraries adhere to metadata standards such as MARC (Machine-Readable
        Cataloging) and Dublin Core. These standards ensure consistency in how
        bibliographic data is recorded, facilitating better search and
        retrieval.
      </p>

      <h2 className="font-bold text-xl">2. Cataloging Process</h2>
      <h3 className="font-bold">a. Descriptive Cataloging</h3>
      <p className="mt-2 mb-2">
        This involves recording detailed information about the book, such as the
        title, author, publication date, edition, and physical description.
        These details help users identify and distinguish between different
        works.
      </p>

      <h3 className="font-bold">b. Subject Cataloging</h3>
      <p className="mt-2 mb-2">
        Librarians assign subject headings and classifications to books based on
        their content. Systems like the Library of Congress Classification (LCC)
        or Dewey Decimal Classification (DDC) are used to organize books by
        subject.
      </p>

      <h3 className="font-bold">c. Authority Control</h3>
      <p className="mt-2 mb-2">
        This ensures consistency in the way names, subjects, and titles are
        recorded. For instance, the author “Mark Twain” might also be cataloged
        under his real name, “Samuel Clemens,” ensuring users can find all works
        by the same author regardless of the name used.
      </p>

      <h2 className="font-bold text-xl">3. Online Catalogs</h2>
      <h3 className="font-bold">a. OPAC (Online Public Access Catalog)</h3>
      <p className="mt-2 mb-2">
        The OPAC is the user-facing interface of the ILS, allowing users to
        search the library’s collection online. Features typically include
        search filters, advanced search options, and the ability to view item
        availability.
      </p>

      <h3 className="font-bold">b. Discovery Layers</h3>
      <p className="mt-2 mb-2">
        Modern libraries often use discovery layers such as EBSCO Discovery
        Service or Primo. These interfaces sit on top of the ILS and provide a
        more intuitive search experience, integrating results from multiple
        databases and electronic resources.
      </p>

      <h2 className="font-bold text-xl">4. Search Functionality</h2>
      <h3 className="font-bold">a. Basic Search</h3>
      <p className="mt-2 mb-2">
        Users can perform simple searches using keywords related to the book’s
        title, author, or subject. The system retrieves records that match the
        entered terms.
      </p>

      <h3 className="font-bold">b. Advanced Search</h3>
      <p className="mt-2 mb-2">
        Advanced search options allow users to combine multiple search criteria,
        such as publication date, format, language, and specific fields (e.g.,
        title, author).
      </p>

      <h3 className="font-bold">c. Faceted Search</h3>
      <p className="mt-2 mb-2">
        Faceted search enables users to refine search results by applying
        filters such as resource type (book, journal, e-book), availability,
        location, and subject.
      </p>

      <h3 className="font-bold">d. Relevance Ranking</h3>
      <p className="mt-2 mb-2">
        Search results are typically ranked based on relevance, which might
        consider factors like the frequency of search terms, the location of
        terms within the record, and the popularity of the item.
      </p>

      <h2 className="font-bold text-xl">5. User Experience</h2>
      <h3 className="font-bold">a. Accessibility</h3>
      <p className="mt-2 mb-2">
        Online catalogs are designed to be accessible, complying with web
        accessibility standards to ensure all users, including those with
        disabilities, can effectively use the system.
      </p>

      <h3 className="font-bold">b. User Accounts</h3>
      <p className="mt-2 mb-2">
        Users can create accounts to manage their interactions with the library.
        Features include viewing checked-out items, renewing loans, placing
        holds on items, and creating personalized lists.
      </p>

      <h3 className="font-bold">c. Integration with Other Resources</h3>
      <p className="mt-2 mb-2">
        Online catalogs often integrate with other digital resources, such as
        e-book platforms, academic databases, and interlibrary loan systems,
        providing a comprehensive search experience.
      </p>

      <h2 className="font-bold text-xl">6. Continuous Improvement</h2>
      <h3 className="font-bold">a. Regular Updates</h3>
      <p className="mt-2 mb-2">
        Cataloging systems and online catalogs are regularly updated to
        incorporate new technologies, improve search algorithms, and enhance
        user interfaces.
      </p>

      <h3 className="font-bold">b. User Feedback</h3>
      <p className="mt-2 mb-2">
        Libraries often solicit feedback from users to identify areas for
        improvement and ensure the catalog meets the needs of the academic
        community.
      </p>

      <h2 className="font-bold text-xl">Conclusion</h2>
      <p>
        The cataloging process in college libraries is vital for organizing and
        accessing vast collections of books and resources. Through advanced
        Integrated Library Systems, adherence to metadata standards, and
        user-friendly online catalogs, libraries provide efficient and effective
        search capabilities. This evolution continues to support the academic
        and research needs of the college community, making information
        retrieval easier and more intuitive.
      </p>
    </div>
  );
};

const LibraryCataloging = () => {
  const { libraryBookDetail } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div>
      <Slider />
      <SearchForm setLoading={setLoading} setInputSearch={setInputSearch} />
      <div className="flex lg:flex-row md:flex-row flex-col  w-full max-w-6xl mx-auto mt-6">
        <div className="mr-4 w-full">
          {loading && (
            <div className="flex p-6 justify-center items-center">
              Loading..........
            </div>
          )}
          {libraryBookDetail && (
            <SearchBookDetail inputSearch={inputSearch} libraryBooksData={libraryBookDetail} />
          )}
          {!libraryBookDetail && !loading && <LibraryDetail />}
        </div>
        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 w-full  bg-white p-2">
          <ImportantLinks />
        </div>
      </div>
    </div>
  );
};

export default LibraryCataloging;
