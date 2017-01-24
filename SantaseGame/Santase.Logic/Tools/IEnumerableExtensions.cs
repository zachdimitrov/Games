﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Santase.Logic.Tools
{
    static class IEnumerableExtensions
    {
        public static IEnumerable<T> Shuffle<T>(this IEnumerable<T> source)
        {
            var array = source.ToArray();
            var n = array.Length;
            for (int i = 0; i < n; i++)
            {
                int r = i + RandomProvider.Instance.Next(0, n - i);
                var temp = array[i];
                array[i] = array[r];
                array[r] = temp;
            }
            return array;
        }
    }
}
