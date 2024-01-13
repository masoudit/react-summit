import { useArticleStore } from "@src/app/local/articleStore";
import Header from "@src/components/main/Header";
import TunStackTable from "@src/components/table/TunStackTable";
import React, { useEffect, useMemo, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from "react-router-dom";

const Articles = () => {
  const getArticles = useArticleStore((state) => state.getList);
  const articles = useArticleStore((state) => state.articles);
  const deleteItem = useArticleStore((state) => state.delete);
  const [deleted, setDeleted] = useState([]);
  const nav = useNavigate();

  const heads = [
    {
      key: "id",
      title: "Id",
      sort: false,
    },
    {
      key: "title",
      title: "Title",
      sort: true,
    },
    {
      key: "author",
      title: "Author",
      sort: true,
    },
    {
      key: "createdAt",
      title: "Created At",
      sort: true,
    },
    {
      key: "updatedAt",
      title: "Updated At",
      sort: true,
    },
    {
      key: "actions",
      title: "Actions",
    },
  ];

  useEffect(() => {
    getArticles();
  }, []);

  const onDelete = (id: string) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure for delete this Item?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteItem(id);
            setDeleted([...deleted, id]);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  const onEdit = (detail: any) => {
    nav(`/articles/${detail.id}`, { state: detail });
  };

  const dataTable = useMemo(() => {
    const data = articles?.data?.articles || [];
    const dataRows: any[] = [];
    data.forEach((row: any) => {
      if (!deleted.includes(row.id))
        dataRows.push({
          id: row.id,
          title: row.title,
          author: row.author,
          description: row.description,
          createdAt: row.createdAt,
          updatedAt: row.updatedAt,
          actions: (
            <div className='flex gap-2'>
              <button
                className='btn btn-xs btn-outline btn-secondary'
                onClick={() => onEdit(row)}
              >
                Edit
              </button>
              <button
                className='btn btn-xs btn-outline btn-error'
                onClick={() => onDelete(row.id)}
              >
                Delete
              </button>
            </div>
          ),
        });
    });
    return dataRows;
  }, [articles, deleted]);

  return (
    <div>
      <Header />
      <div className='container mx-auto main max-w-6xl pr-4 pl-4 mt-10'>
        <div className='card bg-base-100 shadow-xl'>
          <div className='card-body'>
            <TunStackTable heads={heads} rows={dataTable} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
