"use client";
import React, { useEffect } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(1, { message: "请填写服务器名称" }),
  imageUrl: z.string().min(1, { message: "请上传服务器头像" }),
});

export const InitialModal = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(1);
    console.log(data);
  };
  if (!isMounted) return null;
  return (
    <Dialog open>
      <DialogContent className="  bg-white text-black p-0  overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold ">
            创建服务器
          </DialogTitle>
          <DialogDescription className="text-center text-1xl text-zinc-500">
            通过名称和图像赋予您的服务器个性。您以后可以随时更改它。
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-8 " onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-8 px-6">
              <div className="flex-center text-center">上传图片</div>
              <FormField
                control={form.control}
                name={"name"}
                render={({ field, fieldState, formState }) => (
                  <FormItem>
                    <FormLabel className=" dark:text-secondary/70 text-xs font-bold text-zinc-500">
                      服务器名称
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="请输入名称"
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 text-black focus-visible:ring-0  focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>

            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button disabled={isLoading} variant="primary">
                创建
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default InitialModal;
