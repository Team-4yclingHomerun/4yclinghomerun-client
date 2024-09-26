import { useState } from 'react';

import { IoMdSearch } from 'react-icons/io';

type SearchInputProps = {
  onSearch: (searchWord: string) => void;
  showSelect?: boolean; // select태그 사용여부
  selectOptions?: string[];
  placeholder?: string;
};

const SearchInput = ({
  onSearch,
  showSelect,
  selectOptions,
  placeholder = '검색어를 입력해 주세요',
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState('');

  const enterKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchValue);
    }
  };

  const searchHandler = () => {
    onSearch(searchValue);
  };

  return (
    <div className="flex gap-2 text-kt-white">
      {showSelect && (
        <select name="search-news" className="bg-transparent p-2 outline-none">
          {selectOptions &&
            selectOptions.map((option, index) => (
              <option key={index} value={option} className="bg-kt-gray-1">
                {option}
              </option>
            ))}
        </select>
      )}

      <div className="flex gap-2 border-b border-kt-white bg-transparent px-2 py-2 leading-none outline-none">
        {!showSelect && <IoMdSearch size="24" color="ECEEF2" />}
        <input
          className="bg-transparent placeholder-kt-gray-2 outline-none"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={enterKeyHandler}
        />
        <button onClick={searchHandler} className="px-2">
          검색
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
