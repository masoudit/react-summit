import { useArticleStore } from "@src/app/local/articleStore";
import Header from "@src/components/main/Header";
import Icon from "@src/components/utils/Icon";
import Button from "@src/kits/Button";
import InputTextArea from "@src/kits/InpuTextArea";
import InputMultiSelect from "@src/kits/InputMultiSelect";
import InputText from "@src/kits/InputText";
import { t } from "i18next";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Inputs = {
  title: string;
  author: string;
  content: string;
  tags: any[];
};

export const tagOptions = [
  {
    label: "blue",
    value: "blue",
  },
  {
    label: "yellow",
    value: "yellow",
  },
  {
    label: "white",
    value: "white",
  },
  {
    label: "gray",
    value: "gray",
  },
];

const Article = () => {
  const createArticle = useArticleStore((state) => state.create);
  const updateArticle = useArticleStore((state) => state.update);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const isNew = useMatch("articles/new");
  const currentId = useMatch("articles/:id")?.params?.id;
  const { state } = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    if (state) {
      setValue("title", state.title);
      setValue("author", state.author);
      setValue("content", state.description);
    }
  }, [state]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (isNew) {
      const rs = await createArticle({
        title: data.title,
        author: data.author,
        description: data.content,
        tags: data.tags,
      });
      if (rs.response?.success) {
        toast.success(t("successMessageCreated"));
        setTimeout(() => {
          nav("/articles");
        }, 2000);
      } else {
        toast.error(t("errorMessageDefault"));
      }
    } else {
      const rs = await updateArticle({
        id: Number(currentId),
        title: data.title,
        author: data.author,
        description: data.content,
        tags: data.tags,
      });
      if (rs.response?.success) {
        toast.success(t("successMessageUpdate"));
      } else {
        toast.error(t("errorMessageDefault"));
      }
    }
  };

  return (
    <div>
      <Header />
      <div className='container mx-auto main max-w-lg pr-4 pl-4 mt-10'>
        <div className='card bg-base-100 shadow-xl'>
          <div className='card-body'>
            <div className='flex gap-4 justify-between'>
              <h2 className='card-title'>
                {isNew ? "Add Article" : "Edit Article"}
              </h2>
              <button
                className='btn btn-sm btn-ghost btn-square hover:bg-gray-100'
                onClick={() => nav(-1)}
              >
                <Icon name='IconBack' />
              </button>
            </div>
            <form
              className='space-y-4 md:space-y-1'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <InputText
                  title='Title'
                  name='title'
                  type='text'
                  register={register}
                  options={{ errors }}
                  showRequired
                  required
                  light
                />
              </div>
              <div>
                <InputText
                  title='Author'
                  name='author'
                  type='text'
                  register={register}
                  options={{ errors }}
                  showRequired
                  required
                  light
                />
              </div>
              <div>
                <InputTextArea
                  title='Content'
                  name='content'
                  type='text'
                  register={register}
                  options={{ errors }}
                  showRequired
                  required
                />
              </div>
              <div>
                <InputMultiSelect
                  items={tagOptions}
                  title={"Tags"}
                  name={"tags"}
                  register={register}
                  options={{ errors, setValue }}
                  required
                />
              </div>
              <div>
                <div className='mt-10'></div>
              </div>
              <Button title={isNew ? "Create an Article" : "Edit Article"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
