import {  redirect, useLoaderData } from "remix"
import type { LoaderFunction } from "remix"

export const loader:LoaderFunction = () => {
  return redirect('/teams')
}

export default function Index() {

  return (
    <div>Root Index Page - Not to be rendered!</div>
  )
}
