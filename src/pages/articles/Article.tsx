import Header from "@src/components/main/Header";
import Button from "@src/kits/Button";
import InputTextArea from "@src/kits/InpuTextArea";
import InputMultiSelect from "@src/kits/InputMultiSelect";
import InputSelect from "@src/kits/InputSelect";
import InputText from "@src/kits/InputText";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useMatch } from "react-router-dom";

type Inputs = {
  title: string;
  author: string;
  description: string;
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
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const isNew = useMatch("articles/new");
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setValue("title", state.title);
      setValue("author", state.author);
    }
  }, [state]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("data-----", data);
  };

  return (
    <div>
      <Header />
      <div className='container mx-auto main max-w-lg pr-4 pl-4 mt-10'>
        <div className='card bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>
              {isNew ? "Add Article" : "Edit Article"}
            </h2>
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
