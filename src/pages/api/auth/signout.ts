export const prerender = false;
import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase'; // ajusta la ruta

export const POST: APIRoute = async ({ redirect }) => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return new Response('Error al cerrar sesión', { status: 500 });
  }

  // Redirige a la página de login
  return redirect('/signin');
};
